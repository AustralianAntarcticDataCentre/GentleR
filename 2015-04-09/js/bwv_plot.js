(function($) {
    $(document).ready(function() {
	
	$('#bwv_plot').scianimator({
	    'images': ['bwv_dir/bwv_plot1.png', 'bwv_dir/bwv_plot2.png', 'bwv_dir/bwv_plot3.png', 'bwv_dir/bwv_plot4.png', 'bwv_dir/bwv_plot5.png', 'bwv_dir/bwv_plot6.png', 'bwv_dir/bwv_plot7.png', 'bwv_dir/bwv_plot8.png', 'bwv_dir/bwv_plot9.png', 'bwv_dir/bwv_plot10.png', 'bwv_dir/bwv_plot11.png', 'bwv_dir/bwv_plot12.png', 'bwv_dir/bwv_plot13.png', 'bwv_dir/bwv_plot14.png', 'bwv_dir/bwv_plot15.png', 'bwv_dir/bwv_plot16.png', 'bwv_dir/bwv_plot17.png', 'bwv_dir/bwv_plot18.png', 'bwv_dir/bwv_plot19.png', 'bwv_dir/bwv_plot20.png', 'bwv_dir/bwv_plot21.png', 'bwv_dir/bwv_plot22.png', 'bwv_dir/bwv_plot23.png', 'bwv_dir/bwv_plot24.png', 'bwv_dir/bwv_plot25.png', 'bwv_dir/bwv_plot26.png', 'bwv_dir/bwv_plot27.png', 'bwv_dir/bwv_plot28.png', 'bwv_dir/bwv_plot29.png', 'bwv_dir/bwv_plot30.png', 'bwv_dir/bwv_plot31.png', 'bwv_dir/bwv_plot32.png', 'bwv_dir/bwv_plot33.png', 'bwv_dir/bwv_plot34.png', 'bwv_dir/bwv_plot35.png', 'bwv_dir/bwv_plot36.png', 'bwv_dir/bwv_plot37.png', 'bwv_dir/bwv_plot38.png', 'bwv_dir/bwv_plot39.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop',
 'controls': ['first', 'previous', 'play', 'next', 'last', 'loop', 'speed']
	});
	$('#bwv_plot').scianimator('play');
    });
})(jQuery);
