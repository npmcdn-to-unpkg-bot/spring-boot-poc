package app.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import scala.beans.BeanProperty

@Entity
public class DemoBean 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@BeanProperty
	var Id: Long= _
	
	@BeanProperty
	var str: String= _
	
	@BeanProperty
	var num: Int = _
	
	@BeanProperty
	var d:Double = _
	
}
