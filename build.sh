#!/bin/sh
container_cmd=docker
# Ensure we switch to the /board working directory, pointing it
# at the repo root (when running the script from there)
container_args="-w /board -v $(pwd):/board --rm"

# Define the boards to autoroute and export, and the plates
boards="mr_useful"
plates="back_plate front_plate spacer_plate_bottom spacer_plate_top"

# Preserve manually routed files
if [ -e ergogen/output/pcbs/*_manually_routed.kicad_pcb ]; then
    mkdir ergogen/tmp
    mv ergogen/output/pcbs/*_manually_routed* ergogen/tmp
fi

# Cleanup the output folder or KiCad will error out
rm -rf ergogen/output

# Cleanup Freerouting log outpus
if [ -e freerouting/freerouting.log ]; then
    rm freerouting/freerouting.log
fi
if [ -e logs/freerouting.log ]; then
    rm logs/freerouting.log
fi

# Generate unrouted PCBs with Ergogen (definition in package.json)
npm run debug

# Restore manually routed files
if [ -e ergogen/tmp/*_manually_routed.kicad_pcb ]; then
    mv ergogen/tmp/*_manually_routed* ergogen/output/pcbs 
    rm -r ergogen/tmp
fi


if [ ! -e freerouting/freerouting-1.9.0.jar ]; then
    curl https://github.com/freerouting/freerouting/releases/download/v1.9.0/freerouting-1.9.0.jar -L -o freerouting/freerouting-1.9.0.jar
fi

for plate in ${plates}
do
    echo "\n\n>>>>>> Processing $plate <<<<<<\n\n"
    ${container_cmd} run ${container_args} ghcr.io/inti-cmnb/kicad7_auto:latest kibot -b ergogen/output/pcbs/${plate}.kicad_pcb -c kibot/default.kibot.yaml
done

for board in ${boards}
do
    echo "\n\n>>>>>> Processing $board <<<<<<\n\n"
    if [ -e ergogen/output/pcbs/${board}_manually_routed.kicad_pcb ]; then
        ${container_cmd} run ${container_args} ghcr.io/inti-cmnb/kicad7_auto:latest kibot -b ergogen/output/pcbs/${board}_manually_routed.kicad_pcb -c kibot/boards.kibot.yaml
    fi
    ${container_cmd} run ${container_args} soundmonster/kicad-automation-scripts:latest /bin/sh -c "mkdir -p $HOME/.config/kicad; cp /root/.config/kicad/* $HOME/.config/kicad"
    if [ -e ergogen/output/pcbs/${board}.kicad_pcb ]; then
        echo Export DSN 
        ${container_cmd} run ${container_args} ghcr.io/inti-cmnb/kicad7_auto:latest kibot/export_dsn.py -b ergogen/output/pcbs/${board}.kicad_pcb -o ergogen/output/pcbs/${board}.dsn    
        ${container_cmd} run ${container_args} ghcr.io/inti-cmnb/kicad7_auto:latest kibot -b ergogen/output/pcbs/${board}.kicad_pcb -c kibot/default.kibot.yaml
    fi
    if [ -e ergogen/output/pcbs/${board}.dsn ]; then
        echo Autoroute PCB
        # java -Dlog4j.configurationFile=file:./freerouting/log4j2.xml -jar freerouting/freerouting-cli.jar -de ergogen/output/pcbs/${board}.dsn -do ergogen/output/pcbs/${board}.ses -dr freerouting/freerouting.rules -mp 30
        # java -Dlog4j.configurationFile=file:./freerouting/log4j2.xml -jar freerouting/freerouting-1.6.5.jar -de ergogen/output/pcbs/${board}.dsn -do ergogen/output/pcbs/${board}.ses -dr freerouting/freerouting.rules -mp 30
        # java -Dlog4j.configurationFile=file:./freerouting/log4j2.xml -jar freerouting/freerouting-1.7.0.jar -de ergogen/output/pcbs/${board}.dsn -do ergogen/output/pcbs/${board}.ses -dr freerouting/freerouting.rules -mp 30
        # java -Dlog4j.configurationFile=file:./freerouting/log4j2.xml -jar freerouting/freerouting-1.8.0.jar -de ergogen/output/pcbs/${board}.dsn -do ergogen/output/pcbs/${board}.ses -dr freerouting/freerouting.rules -mp 30
        # java -Dlog4j.configurationFile=file:./freerouting/log4j2.xml -jar freerouting/freerouting-1.9.0.jar -de ergogen/output/pcbs/${board}.dsn -do ergogen/output/pcbs/${board}.ses -dr freerouting/freerouting.rules -mp 30
        ${container_cmd} run ${container_args} soundmonster/freerouting_cli:v0.1.0 java -Dlog4j.configurationFile=file:./freerouting/log4j2.xml -jar /opt/freerouting_cli.jar -de ergogen/output/pcbs/${board}.dsn -do ergogen/output/pcbs/${board}.ses -dr freerouting/freerouting.rules -mp 30
        # ${container_cmd} run ${container_args} nixos/nix nix-shell --argstr board ${board}
    fi
    if [ -e ergogen/output/pcbs/${board}.ses ]; then
        echo "Import SES"
        ${container_cmd} run ${container_args} soundmonster/kicad-automation-scripts:latest /usr/lib/python2.7/dist-packages/kicad-automation/pcbnew_automation/import_ses.py ergogen/output/pcbs/${board}.kicad_pcb ergogen/output/pcbs/${board}.ses --output-file ergogen/output/pcbs/${board}_autorouted.kicad_pcb
    fi
    if [ -e ergogen/output/pcbs/${board}_autorouted.kicad_pcb ]; then
        ${container_cmd} run ${container_args} ghcr.io/inti-cmnb/kicad7_auto:latest kibot -b ergogen/output/pcbs/${board}_autorouted.kicad_pcb -c kibot/boards.kibot.yaml
    fi
done