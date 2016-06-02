package app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.entity.DemoBean;
import app.entity.DemoRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DemoController 
{
	@Autowired
	DemoRepository repo;
	
	@Autowired
	DemoService service; 

	@RequestMapping("/test")
	public String test()
	{
		return "Sample Text!";
	}

	@RequestMapping("/demo")
	public DemoBean demo(@RequestParam(value="id") Long Id, @RequestParam(value="str") String str, @RequestParam(value="num") int num, @RequestParam(value="d") double d)
	{
		return new DemoBean(Id, str, num, d);
	}

	@RequestMapping("/all")
	public Iterable<DemoBean> listAll()
	{
		return repo.findAll();
	}

	@RequestMapping(value="/create", method={RequestMethod.POST})
	public String createDemoBean(@RequestBody DemoBean demoBean)
	{
		repo.save(demoBean);
		return "Success";
	}

	@RequestMapping(value="/delete", method={RequestMethod.POST}, consumes = "application/x-www-form-urlencoded", produces = MediaType.APPLICATION_JSON_VALUE)
	public Boolean deleteDemoBean(@RequestParam("id") long id)
	{
		DemoBean beanToDelete = repo.findOne(id);
		if(beanToDelete == null)
			return false;
		else
		{
			repo.delete(beanToDelete);
			return true;
		}

	}
}
