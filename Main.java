class Main {
  public static double DivByTwo(double variable)
  {
    return variable / 2;
  }
  public static void main(String[] args)
  {
    System.out.println(DivByTwo(5));
    System.out.println(MultiplyByTwo(6));
  }
  public static int MultiplyByTwo(int var2)
  {
    return var2 * 2;
  }
}

class ToolBox {
  public static void main(String[] args)
  {
    System.out.println(Main.DivByTwo(5));
  }
}