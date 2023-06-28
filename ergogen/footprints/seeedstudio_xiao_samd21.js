// Seeed Studio XIAO SAMD21 (aka Seeeduino Xiao) with vias for underside pads
module.exports = {
  params: {
      designator: 'MCU',
      side:  'F',
      flip: false, // False = MCU faces away from PCB - True = MCU faces PCB
      extra_pads: false,
      VIN:    {type: 'net', value: 'VIN'},
      SWDIO:  {type: 'net', value: 'SWDIO'},
      SWDCLK: {type: 'net', value: 'SWDCLK'},
      RST:    {type: 'net', value: 'RST'},
      GND:    {type: 'net', value: 'GND'},
      P0:     {type: 'net', value: 'P0'},
      P1:     {type: 'net', value: 'P1'},
      P2:     {type: 'net', value: 'P2'},
      P3:     {type: 'net', value: 'P3'},
      P4:     {type: 'net', value: 'P4'},
      P5:     {type: 'net', value: 'P5'},
      P6:     {type: 'net', value: 'P6'},
      P7:     {type: 'net', value: 'P7'},
      P8:     {type: 'net', value: 'P8'},
      P9:     {type: 'net', value: 'P9'},
      P10:    {type: 'net', value: 'P10'},
      RAW3V3: {type: 'net', value: 'RAW3V3'},
      RAW5V:  {type: 'net', value: 'RAW5V'},
  },
  body:   p => {
    const standard_opening = `
    (module "Seeeduino XIAO-MOUDLE14P-2.54-21X17.8MM tht maybe" (layer "${ p.side }.Cu") (tedit 613ABEDD)
      ${p.at /* parametric position */}

      (fp_text reference "${p.ref}" (at 0 6.4) (layer ${p.side}.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      `
    const front_pads = `
      (fp_rect (start 6.3 -6.4) (end 9.8 -3.8) (width 0.1) (layer "F.SilkS"))
      (pad "P0" smd oval (at -8.06588 -7.61882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P0.str})
      (pad "P0" thru_hole circle (at -7.649 -7.61882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P0.str})
      (pad "P1" smd oval (at -8.06588 -5.07882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P1.str})
      (pad "P1" thru_hole circle (at -7.649 -5.07882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P1.str})
      (pad "P2" smd oval (at -8.06588 -2.53882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P2.str})
      (pad "P2" thru_hole circle (at -7.649 -2.53882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P2.str})
      (pad "P3" smd oval (at -8.06588 0.00118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P3.str})
      (pad "P3" thru_hole circle (at -7.649 0.00118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P3.str})
      (pad "P4" smd oval (at -8.06588 2.54118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P4.str})
      (pad "P4" thru_hole circle (at -7.649 2.54118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P4.str})
      (pad "P5" smd oval (at -8.06588 5.08118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P5.str})
      (pad "P5" thru_hole circle (at -7.649 5.08118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P5.str})
      (pad "P6" smd oval (at -8.06588 7.62118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P6.str})
      (pad "P6" thru_hole circle (at -7.649 7.62118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P6.str})
      (pad "P7" thru_hole circle (at 7.682 7.62118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P7.str})
      (pad "P7" smd oval (at 8.09868 7.62118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P7.str})
      (pad "P8" thru_hole circle (at 7.682 5.08118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P8.str})
      (pad "P8" smd oval (at 8.09868 5.08118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P8.str})
      (pad "P9" thru_hole circle (at 7.682 2.54118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P9.str})
      (pad "P9" smd oval (at 8.09868 2.54118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P9.str})
      (pad "P10" thru_hole circle (at 7.682 0.00118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P10.str})
      (pad "P10" smd oval (at 8.09868 0.00118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P10.str})
      (pad "3V3" thru_hole circle (at 7.682 -2.53882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.RAW3V3.str})
      (pad "3V3" smd oval (at 8.09868 -2.53882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.RAW3V3.str})
      (pad "GND" thru_hole circle (at 7.682 -5.07882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
      (pad "GND" smd oval (at 8.09868 -5.07882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str})
      (pad "RAW" thru_hole circle (at 7.682 -7.61882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.RAW5V.str})
      (pad "RAW" thru_hole oval (at 8.09868 -7.61882 ${p.rot}) (size 2.74828 1.99898) (drill 0.762) (layers "F.Cu" "F.Paste" "F.Mask") ${p.RAW5V.str})
    `
    const front_pads_flipped = `
      (fp_rect (start -6.3 -6.4) (end -9.8 -3.8) (width 0.1) (layer "F.SilkS"))
      (pad "RAW" smd oval (at -8.06588 -7.61882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.RAW5V.str})
      (pad "RAW" thru_hole circle (at -7.649 -7.61882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.RAW5V.str})
      (pad "GND" smd oval (at -8.06588 -5.07882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str})
      (pad "GND" thru_hole circle (at -7.649 -5.07882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
      (pad "3V3" smd oval (at -8.06588 -2.53882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.RAW3V3.str})
      (pad "3V3" thru_hole circle (at -7.649 -2.53882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.RAW3V3.str})
      (pad "P10" smd oval (at -8.06588 0.00118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P10.str})
      (pad "P10" thru_hole circle (at -7.649 0.00118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P10.str})
      (pad "P9" smd oval (at -8.06588 2.54118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P9.str})
      (pad "P9" thru_hole circle (at -7.649 2.54118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P9.str})
      (pad "P8" smd oval (at -8.06588 5.08118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P8.str})
      (pad "P8" thru_hole circle (at -7.649 5.08118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P8.str})
      (pad "P7" smd oval (at -8.06588 7.62118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P7.str})
      (pad "P7" thru_hole circle (at -7.649 7.62118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P7.str})
      (pad "P6" thru_hole circle (at 7.682 7.62118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P6.str})
      (pad "P6" smd oval (at 8.09868 7.62118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P6.str})
      (pad "P5" thru_hole circle (at 7.682 5.08118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P5.str})
      (pad "P5" smd oval (at 8.09868 5.08118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P5.str})
      (pad "P4" thru_hole circle (at 7.682 2.54118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P4.str})
      (pad "P4" smd oval (at 8.09868 2.54118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P4.str})
      (pad "P3" thru_hole circle (at 7.682 0.00118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P3.str})
      (pad "P3" smd oval (at 8.09868 0.00118 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P3.str})
      (pad "P2" thru_hole circle (at 7.682 -2.53882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P2.str})
      (pad "P2" smd oval (at 8.09868 -2.53882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P2.str})
      (pad "P1" thru_hole circle (at 7.682 -5.07882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P1.str})
      (pad "P1" smd oval (at 8.09868 -5.07882 ${p.rot}) (size 2.74828 1.99898) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P1.str})
      (pad "P0" thru_hole circle (at 7.682 -7.61882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P0.str})
      (pad "P0" thru_hole oval (at 8.09868 -7.61882 ${p.rot}) (size 2.74828 1.99898) (drill 0.762) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P0.str})
    `
    const back_pads = `
      (fp_rect (start -6.3 -6.4) (end -9.8 -3.8) (width 0.1) (layer "B.SilkS"))
      (pad "RAW" smd oval (at -8.06588 -7.61882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.RAW5V.str})
      (pad "RAW" thru_hole circle (at -7.649 -7.61882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.RAW5V.str})
      (pad "GND" smd oval (at -8.06588 -5.07882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND.str})
      (pad "GND" thru_hole circle (at -7.649 -5.07882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
      (pad "3V3" smd oval (at -8.06588 -2.53882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.RAW3V3.str})
      (pad "3V3" thru_hole circle (at -7.649 -2.53882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.RAW3V3.str})
      (pad "P10" smd oval (at -8.06588 0.00118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P10.str})
      (pad "P10" thru_hole circle (at -7.649 0.00118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P10.str})
      (pad "P9" smd oval (at -8.06588 2.54118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P9.str})
      (pad "P9" thru_hole circle (at -7.649 2.54118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P9.str})
      (pad "P8" smd oval (at -8.06588 5.08118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P8.str})
      (pad "P8" thru_hole circle (at -7.649 5.08118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P8.str})
      (pad "P7" smd oval (at -8.06588 7.62118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P7.str})
      (pad "P7" thru_hole circle (at -7.649 7.62118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P7.str})
      (pad "P6" thru_hole circle (at 7.682 7.62118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P6.str})
      (pad "P6" smd oval (at 8.09868 7.62118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P6.str})
      (pad "P5" thru_hole circle (at 7.682 5.08118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P5.str})
      (pad "P5" smd oval (at 8.09868 5.08118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P5.str})
      (pad "P4" thru_hole circle (at 7.682 2.54118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P4.str})
      (pad "P4" smd oval (at 8.09868 2.54118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P4.str})
      (pad "P3" thru_hole circle (at 7.682 0.00118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P3.str})
      (pad "P3" smd oval (at 8.09868 0.00118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P3.str})
      (pad "P2" thru_hole circle (at 7.682 -2.53882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P2.str})
      (pad "P2" smd oval (at 8.09868 -2.53882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P2.str})
      (pad "P1" thru_hole circle (at 7.682 -5.07882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P1.str})
      (pad "P1" smd oval (at 8.09868 -5.07882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P1.str})
      (pad "P0" thru_hole circle (at 7.682 -7.61882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P0.str})
      (pad "P0" thru_hole oval (at 8.09868 -7.61882 ${p.rot}) (size 2.74828 1.99898) (drill 0.762) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P0.str})
    `
    const back_pads_flipped = `
      (fp_rect (start 6.3 -6.4) (end 9.8 -3.8) (width 0.1) (layer "B.SilkS"))
      (pad "P0" smd oval (at -8.06588 -7.61882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P0.str})
      (pad "P0" thru_hole circle (at -7.649 -7.61882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P0.str})
      (pad "P1" smd oval (at -8.06588 -5.07882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P1.str})
      (pad "P1" thru_hole circle (at -7.649 -5.07882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P1.str})
      (pad "P2" smd oval (at -8.06588 -2.53882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P2.str})
      (pad "P2" thru_hole circle (at -7.649 -2.53882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P2.str})
      (pad "P3" smd oval (at -8.06588 0.00118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P3.str})
      (pad "P3" thru_hole circle (at -7.649 0.00118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P3.str})
      (pad "P4" smd oval (at -8.06588 2.54118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P4.str})
      (pad "P4" thru_hole circle (at -7.649 2.54118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P4.str})
      (pad "P5" smd oval (at -8.06588 5.08118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P5.str})
      (pad "P5" thru_hole circle (at -7.649 5.08118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P5.str})
      (pad "P6" smd oval (at -8.06588 7.62118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P6.str})
      (pad "P6" thru_hole circle (at -7.649 7.62118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P6.str})
      (pad "P7" thru_hole circle (at 7.682 7.62118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P7.str})
      (pad "P7" smd oval (at 8.09868 7.62118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P7.str})
      (pad "P8" thru_hole circle (at 7.682 5.08118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P8.str})
      (pad "P8" smd oval (at 8.09868 5.08118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P8.str})
      (pad "P9" thru_hole circle (at 7.682 2.54118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P9.str})
      (pad "P9" smd oval (at 8.09868 2.54118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P9.str})
      (pad "P10" thru_hole circle (at 7.682 0.00118 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.P10.str})
      (pad "P10" smd oval (at 8.09868 0.00118 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.P10.str})
      (pad "3V3" thru_hole circle (at 7.682 -2.53882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.RAW3V3.str})
      (pad "3V3" smd oval (at 8.09868 -2.53882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.RAW3V3.str})
      (pad "GND" thru_hole circle (at 7.682 -5.07882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
      (pad "GND" smd oval (at 8.09868 -5.07882 ${p.rot}) (size 2.74828 1.99898) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND.str})
      (pad "RAW" thru_hole circle (at 7.682 -7.61882 ${p.rot}) (size 1.524 1.524) (drill 1) (layers "*.Cu" "*.Mask") ${p.RAW5V.str})
      (pad "RAW" thru_hole oval (at 8.09868 -7.61882 ${p.rot}) (size 2.74828 1.99898) (drill 0.762) (layers "B.Cu" "B.Paste" "B.Mask") ${p.RAW5V.str})
    `
    const extra_pads = `
      (pad "VIN" thru_hole oval (at -1.199 8.699 ${90 + p.rot}) (size 2.032 1.016) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.VIN.str})
      (pad "GND" thru_hole oval (at 1.351 8.699 ${90 + p.rot}) (size 2.032 1.016) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.GND.str})
      (pad "SWDIO" thru_hole circle (at -1.200197 -8.305187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.SWDIO.str})
      (pad "SWDCLK" thru_hole circle (at 1.339803 -8.305187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.SWDCLK.str})
      (pad "RST" thru_hole circle (at -1.200197 -5.765187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.RST.str})
      (pad "GND" thru_hole circle (at 1.339803 -5.765187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.GND.str})
    `
    const extra_pads_flipped = `
      (pad "GND" thru_hole oval (at -1.199 8.699 ${90 + p.rot}) (size 2.032 1.016) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.GND.str})
      (pad "VIN" thru_hole oval (at 1.351 8.699 ${90 + p.rot}) (size 2.032 1.016) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.VIN.str})
      (pad "SWDCLK" thru_hole circle (at -1.200197 -8.305187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.SWDCLK.str})
      (pad "SWDIO" thru_hole circle (at 1.339803 -8.305187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.SWDIO.str})
      (pad "GND" thru_hole circle (at -1.200197 -5.765187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.GND.str})
      (pad "RST" thru_hole circle (at 1.339803 -5.765187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") ${p.RST.str})
    `
    const standard_closing = `
    )
    `

    let final = standard_opening;

    if(p.side == "F") {
      if(p.flip) {
        final += front_pads_flipped;
      } else {
        final += front_pads;
      }
    }
    if(p.side == "B") {
      if(p.flip) {
        final += back_pads_flipped;
      } else {
        final += back_pads;
      }
    }

    if(p.extra_pads) {
      if(p.flip) {
        final += extra_pads;
      } else {
        final += extra_pads_flipped;
      }
    }
    return final;
  }
}