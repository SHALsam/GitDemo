describe('All locators demo', function(){
	
	function Divide(a,b)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	function Add(c,d)
	{
		element(by.model("first")).sendKeys(c);
		element(by.model("operator")).element(by.css("option:nth-child(1)")).click();
		element(by.model("second")).sendKeys(d);
		element(by.id("gobutton")).click();
	}
	
	function Sub(e,f)
	{
		element(by.model("first")).sendKeys(e);
		element(by.model("operator")).element(by.css("option:nth-child(5)")).click();
		element(by.model("second")).sendKeys(f);
		element(by.id("gobutton")).click();
	}
	
	it('Open Angular js website', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		Divide(8,2);
		Add(1,2);
		Sub(8,2);
		
		/**element.all(by.repeater("result in memory")).count().then(function(text){
			console.log(text);
		})**/
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
	})
		/**element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
		})**/
	
})
