$(function(){
	
	$('.textchange').on('keyup',function(e){
		
		compute_load();
		
	});
	
	$('.textchange2').on('keyup',function(e){
		
		compute_load_by_capital_value();
		
	});
	
	function compute_load()
	{
		
		var capital = $('#compute_text').val();
		var remaining_bal = $('#remaining_bal_text').val();
		var current_sales = $('#sales_text').val();
		
		var netsales = 0;
		var profit_quotient = 0;
		var income_from_balance = 0;
		var income_projection = 0;
		
			
				netloadsales = parseFloat(capital) - parseFloat(remaining_bal);
				netsales = parseFloat(current_sales) - parseFloat(netloadsales);
				
			
				$('#net_sales_text').val(netsales);
				
				profit_quotient = netloadsales/netsales;
				
				$('#profit_quotient_text').val(profit_quotient);
				$('#profit_quotient_text_2').val(profit_quotient);
				
				
				income_from_balance = remaining_bal / profit_quotient;
				income_projection = netsales + (income_from_balance);
				
				$('#income_remaining_bal_text').val(income_from_balance);
				$('#income_projection_text').val(income_projection);
				
				
				
			
		
	}
	
	
	function compute_load_by_capital_value()
	{
		
		var capital = $('#compute_text_2').val();				
		var profit_quotient = $('#profit_quotient_text_2').val();		
		
		
		var income = 0;		
		
		if(profit_quotient != '' || profit_quotient != '0')
		{
			income = parseFloat(capital) / parseFloat(profit_quotient);				
			$('#income_text').val(income);	
		}	
		else
		{
			$('#income_text').val(0);	
		}
		
		
	}
	
	
});