package com.company;

public class TestCase3 {
    public static void Unittest3() throws Exception{
        String user_id = "134";
        Integer type = 1;
        System.out.println("Unit test 3: The internet connected");
        ResponseSetBlock res = TestCaseSetBlockAPI.callAPI(user_id,type);
        if (!(res.code.equals("1001"))) throw new AssertionError();
        if (!(res.message.equals( "Can not connect to DB"))) throw new AssertionError();
        System.out.println("Internet is disconnected");
        System.out.println("Finished");
    }
}
