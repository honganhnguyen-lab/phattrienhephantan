package com.company;

public class TestCase4 {
    public static void Unittest4() throws Exception{
        String user_id = "134";
        Integer type = 1;
        System.out.println("Unit test 4: The account is blocked");
        ResponseSetBlock res = TestCaseSetBlockAPI.callAPI(user_id,type);
        if (!(res.code.equals("9995"))) throw new AssertionError();
        if (!(res.message.equals("User is not validated"))) throw new AssertionError();
        ResponseLogin resp = TestCaseLoginAPI.callAPI();
        if (!(resp.code.equals("1000"))) throw new AssertionError();
        if (!(resp.message.equals("OK"))) throw new AssertionError();
    }
}
