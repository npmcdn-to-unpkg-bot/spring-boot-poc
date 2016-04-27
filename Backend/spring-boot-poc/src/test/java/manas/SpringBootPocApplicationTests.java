package manas;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import app.SpringBootPocApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SpringBootPocApplication.class)
@WebAppConfiguration
public class SpringBootPocApplicationTests {

	@Test
	public void contextLoads() {
	}

}
