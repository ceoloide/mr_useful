// Seeduino XIAO with vias for underside pads
module.exports = {
  params: {
      designator: 'MCU',
      side:  'F',
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
  body:   p => `
    (module "Seeeduino XIAO-MOUDLE14P-2.54-21X17.8MM tht maybe" (layer "${ p.side }.Cu") (tedit 613ABEDD) (attr smd)
      ${ p.at /* parametric position */ }
      (pad "1" smd oval (at 0.83312 -18.11782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P0.str })
      (pad "1" thru_hole circle (at 1.25 -18.11782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P0.str })
      (pad "2" thru_hole circle (at 1.25 -15.57782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P1.str })
      (pad "2" smd oval (at 0.83312 -15.57782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P1.str })
      (pad "3" smd oval (at 0.83312 -13.03782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P2.str })
      (pad "3" thru_hole circle (at 1.25 -13.03782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P2.str })
      (pad "4" smd oval (at 0.83312 -10.49782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P3.str })
      (pad "4" thru_hole circle (at 1.25 -10.49782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P3.str })
      (pad "5" thru_hole circle (at 1.25 -7.95782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P4.str })
      (pad "5" smd oval (at 0.83312 -7.95782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P4.str })
      (pad "6" smd oval (at 0.83312 -5.41782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P5.str })
      (pad "6" thru_hole circle (at 1.25 -5.41782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P5.str })
      (pad "7" thru_hole circle (at 1.25 -2.87782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P6.str })
      (pad "7" smd oval (at 0.83312 -2.87782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P6.str })
      (pad "8" thru_hole circle (at 16.581 -2.87782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P7.str })
      (pad "8" smd oval (at 16.99768 -2.87782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P7.str })
      (pad "9" smd oval (at 16.99768 -5.41782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask")  ${ p.P8.str })
      (pad "9" thru_hole circle (at 16.581 -5.41782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask)  ${ p.P8.str })
      (pad "10" smd oval (at 16.99768 -7.95782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P9.str })
      (pad "10" thru_hole circle (at 16.581 -7.95782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P9.str })
      (pad "11" thru_hole circle (at 16.581 -10.49782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.P10.str })
      (pad "11" smd oval (at 16.99768 -10.49782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P10.str })
      (pad "12" smd oval (at 16.99768 -13.03782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.RAW3V3.str })
      (pad "12" thru_hole circle (at 16.581 -13.03782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.RAW3V3.str })
      (pad "13" smd oval (at 16.99768 -15.57782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.GND.str })
      (pad "13" thru_hole circle (at 16.581 -15.57782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.GND.str })
      (pad "14" thru_hole circle (at 16.581 -18.11782 ${p.rot}) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${ p.RAW5V.str })
      (pad "14" thru_hole oval (at 16.99768 -18.11782 ${p.rot}) (size 2.74828 1.99898) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.RAW5V.str })
      (pad "15" thru_hole oval (at 7.7 -1.8 ${p.rot + 90 }) (size 2.032 1.016) (drill 0.3) (layers *.Cu *.Paste *.Mask) ${ p.VIN.str })
      (pad "16" thru_hole oval (at 10.25 -1.8 ${p.rot + 90 }) (size 2.032 1.016) (drill 0.3) (layers *.Cu *.Paste *.Mask) ${ p.GND.str })
      (pad "17" thru_hole circle (at 7.698803 -18.804187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers *.Cu *.Paste *.Mask) ${ p.SWDIO.str })
      (pad "18" thru_hole circle (at 10.238803 -18.804187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers *.Cu *.Paste *.Mask) ${ p.SWDCLK.str })
      (pad "19" thru_hole circle (at 7.698803 -16.264187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers *.Cu *.Paste *.Mask) ${ p.RST.str })
      (pad "20" thru_hole circle (at 10.238803 -16.264187 ${p.rot}) (size 1.143 1.143) (drill 0.3) (layers *.Cu *.Paste *.Mask) ${ p.GND.str })

      ${ ``/* Silkscreen */ }
      (fp_line (start 13.39342 -22.42312) (end 13.39342 -15.06982) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 5.461 -18.415) (end 5.461 -21.082) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 4.3942 -15.06982) (end 4.3942 -22.42312) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 11.43 -17.78) (end 11.43 -20.32) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 14.097 -18.415) (end 14.097 -21.082) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 3.683 -18.415) (end 3.683 -21.082) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 12.319 -14.34846) (end 12.319 -17.018) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 3.683 -21.082) (end 5.461 -21.082) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 6.35 -3.175) (end 12.065 -3.175) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 12.319 -14.34846) (end 14.097 -14.34846) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 12.319 -18.415) (end 14.097 -18.415) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 12.319 -18.415) (end 12.319 -21.082) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 3.683 -17.018) (end 5.461 -17.018) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 14.097 -14.34846) (end 14.097 -17.018) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 13.39342 -15.06982) (end 4.3942 -15.06982) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 5.461 -14.34846) (end 5.461 -17.018) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 6.35 -20.32) (end 11.43 -20.32) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 6.35 -17.78) (end 6.35 -20.32) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 6.35 -0.635) (end 6.35 -3.175) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 0 0) (end 17.79778 0) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 12.319 -21.082) (end 14.097 -21.082) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 3.683 -18.415) (end 5.461 -18.415) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 3.683 -14.34846) (end 5.461 -14.34846) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 12.065 -0.635) (end 12.065 -3.175) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 6.35 -17.78) (end 11.43 -17.78) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 17.79778 0) (end 17.79778 -20.99818) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 0 -20.32762) (end 0 0) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 3.683 -14.34846) (end 3.683 -17.018) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 0.67056 -20.99818) (end 0 -20.32762) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 6.35 -0.635) (end 12.065 -0.635) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_line (start 17.79778 -20.99818) (end 0.67056 -20.99818) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 4.39928 -22.42312) (end 13.39342 -22.42312) (layer "${ p.side }.SilkS") (width 0.127))
      (fp_line (start 12.319 -17.018) (end 14.097 -17.018) (layer "${ p.side }.SilkS") (width 0.06604))
      (fp_circle (center -0.889 -18.161) (end -0.889 -18.415) (layer "${ p.side }.SilkS") (width 1))
    )
   `
}