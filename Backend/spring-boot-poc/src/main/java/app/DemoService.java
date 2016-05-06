package app;

import java.util.function.Function;

import org.apache.commons.lang3.text.WordUtils;
import org.springframework.stereotype.Component;

@Component
public class DemoService 
{
	
	Function<String, String> capitalizeString = (s) -> {return WordUtils.capitalize(s);};
	
	public String formatString(String inputStr)
	{
		return capitalizeString.apply(inputStr);
	}

}
