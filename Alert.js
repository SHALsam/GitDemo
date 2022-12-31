describe('Alert demo', function(){
	it('Open non angular website', function(){
	browser.waitForAngularEnabled(false);
	browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
	element(by.id("alertbtn")).click();
	browser.switchTo().alert().dismiss().then(function(){
		browser.sleep(5000);
	})
		
		
		
	})
	
	
})

