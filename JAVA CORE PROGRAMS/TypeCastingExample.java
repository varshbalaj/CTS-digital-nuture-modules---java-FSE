class TypeCastingExample {
    public static void main(String[] args) {

        double d = 45.78;
        int i = (int) d; // double to int

        System.out.println("Double Value: " + d);
        System.out.println("After Casting to int: " + i);

        int num = 100;
        double d2 = (double) num; // int to double

        System.out.println("Integer Value: " + num);
        System.out.println("After Casting to double: " + d2);
    }
}