package app;

import org.apache.commons.lang3.text.WordUtils;
import org.springframework.stereotype.Component;

@Component
public class DemoService 
{
	
	String resourceURL = "https://api.twitter.com/1.1/search/tweets.json?q=%40thehindu&src=typd";
	
	public String formatString(String inputStr)
	{
		return WordUtils.capitalize(inputStr);
	}

}
