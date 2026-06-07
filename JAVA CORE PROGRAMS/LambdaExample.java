import java.util.*;

public class LambdaExample {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Ram");
        names.add("Anu");
        names.add("Karthik");
        names.add("Bala");

        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("Sorted Names:");

        for (String name : names) {
            System.out.println(name);
        }
    }
}