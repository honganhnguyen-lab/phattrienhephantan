package com.company;

public class TestCase2 {
    public static void UnitTest2() throws Exception{
        System.out.println("Unit test 2: Token invalid");
        String user_id = "134";
        Integer type = 1;
        System.out.println("Unit test 2: Token is incorrect");
        ResponseSetBlock ress = TestCaseSetBlockAPI.callAPI(user_id,type);
        if (!(ress.code.equals("9998"))) throw new AssertionError();
        if (!(ress.message.equals("Token is invalid"))) throw new AssertionError();
        ResponseLogin res = TestCaseLoginAPI.callAPI();
        if (((!res.code.equals("1000")))) throw new AssertionError();
        if (((!res.message.equals("OK")))) throw new AssertionError();
        System.out.println("Finished");

    }
}
