package app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DemoBean 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	long Id;
	
	String str;
	int num;
	double d;
	
	public DemoBean(){}
	
	public DemoBean(long id, String str, int num, double d) {
		super();
		this.Id = id;
		this.str = str;
		this.num = num;
		this.d = d;
	}
	
	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getStr() {
		return str;
	}
	public void setStr(String str) {
		this.str = str;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public double getD() {
		return d;
	}
	public void setD(double d) {
		this.d = d;
	}
	
	@Override
	public String toString() {
		return "DemoBean [Id=" + Id + ", str=" + str + ", num=" + num + ", d=" + d + "]";
	}
}
