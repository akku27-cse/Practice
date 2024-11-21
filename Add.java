import java.util.*;

public class Add{
    public static void main(String []ar){
        Scanner sc=new Scanner(System.in);
        System.err.println("Enter first Number");
        float a=sc.nextFloat();
        System.err.println("Enter second Number");
        float b=sc.nextFloat();
        System.out.print("The result is"+" "+(a+b));
        UserRegistration u1=new UserRegistration();
        u1.Name="santu";
    }
}
class UserRegistration{
    String Name;
    String pass;

}
