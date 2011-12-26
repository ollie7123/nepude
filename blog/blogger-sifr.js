// WARNING: When editing this code, copying and pasting, deleting lines, etc - Please be very careful and DOUBLE check your work. If you accidentally delete one little punctuation mark that you're not supposed to, or if you leave some lines in there that you're supposed to delete, or if you paste code in the wrong spot, etc the entire code won't work.

// WARNING: Do NOT delete the quotes around the font URL. This is a very common typo and your fonts won't show up if you delete them. Only change USERNAME to your hostwebs.com username and FONTNAME to the name of the font you uploaded. 

var kevinandamanda = {
     src: 'http://nepude.comuv.com/font/exo2.swf'
     };

sIFR.activate(kevinandamanda);


// This block of code changes your Post Title. If you want to use the default Blogger font for your Post Titles, delete these lines:
    
 sIFR.replace(kevinandamanda, {
     selector: 'h3.post-title',
     fitExactly: false,
     tuneHeight: -5,
     css: ['.sIFR-root { color: #d81415; font-size: 28px; font-weight: normal; }'
             ,'a { text-decoration: none; }'
             ,'a:link { color: #d81415; }'
             ,'a:hover { color: #d81415; }'
      ],
 wmode: 'transparent',
 ratios: [6, 1.93, 10, 1.92, 13, 1.86, 17, 1.82, 21, 1.8, 29, 1.79, 32, 1.78, 33, 1.77, 36, 1.78, 43, 1.77, 44, 1.76, 47, 1.77, 70, 1.76, 71, 1.75, 74, 1.76, 75, 1.75, 76, 1.76, 1.75]
    });

//End of Post Title code. 
    

// This block of code changes the Date. If you want to use the default Blogger font for your Date, delete these lines:
      
sIFR.replace(kevinandamanda, {
     selector: '#footer-wrapper h2',
     fitExactly: false,
     tuneHeight: -5,
     css: ['.sIFR-root { color: #ffffff; font-size: 20px; }',
		'a { text-decoration: none; color: #ffffff;}',
		'a:hover { color: #ffffff;}'
		],
  wmode: 'transparent',
  ratios: [6, 1.93, 10, 1.92, 13, 1.86, 17, 1.82, 21, 1.8, 29, 1.79, 32, 1.78, 33, 1.77, 36, 1.78, 43, 1.77, 44, 1.76, 47, 1.77, 70, 1.76, 71, 1.75, 74, 1.76, 75, 1.75, 76, 1.76, 1.75]
  });

//End of Date code. 


// This block of code changes the Sidebar Titles. If you have a third column, copy and paste the following lines at the bottom of this file. Change the word "sidebar" to the name of your third column. Only the word sidebar, don't mess with the # or the h2.

sIFR.replace(kevinandamanda, {
  selector: '#sidebar h2',
  fitExactly: false,
  tuneHeight: -5,
  css: ['.sIFR-root { color: #ff1493; font-size: 28px; font-weight: normal; }'
        ,'a { text-decoration: none; }'
        ,'a:link { color: #ff1493; }'
        ,'a:hover { color: #ff1493; }'
      ],
 wmode: 'transparent',
 ratios: [6, 1.93, 10, 1.92, 13, 1.86, 17, 1.82, 21, 1.8, 29, 1.79, 32, 1.78, 33, 1.77, 36, 1.78, 43, 1.77, 44, 1.76, 47, 1.77, 70, 1.76, 71, 1.75, 74, 1.76, 75, 1.75, 76, 1.76, 1.75]
    });

//End of Sidebar code.