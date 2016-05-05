package app.monitor;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class DemoMonitor {
	
	@Around("execution(* app.DemoController.*(..))")
	public Object logBeforeMethodExecution(ProceedingJoinPoint joinPoint) throws Throwable{
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss.SSS");
		Calendar startCalendar = Calendar.getInstance();
		String start = sdf.format(startCalendar.getTime());
		Object res = joinPoint.proceed();
		Calendar endCalendar = Calendar.getInstance();
		String end = sdf.format(endCalendar.getTime());
		System.out.println("Entered method! "+ joinPoint.getSignature()+"::: Thread ID="+Thread.currentThread().getId()+":::Method Execution start time= "+start+", execution end time= "+end);
		return res;
	}

}
