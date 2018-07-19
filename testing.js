define([
    'jquery',
    'base/js/dialog',
    'base/js/events',
    'base/js/utils',
    'base/js/namespace',
    'notebook/js/celltoolbar',
    'notebook/js/codecell',
    
]







///Messing with Excel
function run_it (){
var old_workbook = new Excel.Workbook();
old_workbook.xslx.readFile("Sample.xlsx");
var new_workbook = old_workbook;

//Select rows and columns

//Delete the unwanted
new_worksheet.spliceColumns(C,D);
new_worksheet.spliceRows(3, 5, 6);

//Output into Juptyter
return workbook.xslx.writeFile("new.xlsx");
}

//Creates a button
	// first function to get called, loads the nbextension into Jupyter
    function load_ipython_extension () {
        events.on('create.Cell',create_cell);

        Jupyter.toolbar.add_buttons_group([
            {
               
                label : 'Input Excel',
                icon : 'fa-compress',
                callback : run_it
            }
            
        ]);
    }
     return {
        load_ipython_extension : load_ipython_extension
    };







































///////////////////////////Necessary
    
    
       /**
     * Call nbconvert using the current notebook server profile
     *
     */
	var callNbconvert = function (name) {
        var kernel = IPython.notebook.kernel;
        
        var open_tab = true;
        var nbconvert_options = '--to html';
        var extension = '.html';

		var command = 'import os; os.system(\'jupyter nbconvert ' + nbconvert_options + ' \"' + name + '\"\')';
		function open_new_HTML_file() {
            //var command3 = "import os; os.remove(\"" + name + "\")";
            //kernel.execute(command3);
			if (open_tab === true) {
				var url = utils.splitext(name)[0] + extension;
                window.open(url, '_blank');
			}
		}
        kernel.execute(command, { shell: {reply: open_new_HTML_file} });

        // shell: {reply: callback}
        $('#doPrintView').blur();
	};
	
	
	
	
	
	