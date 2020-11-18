package com.company;

public class TestCase1 {
    public static void UnitTest1s() throws Exception {
        System.out.println("Unit test 1: Set block successful");
        String user_id = "134";
        Integer type = 1;
        ResponseSetBlock res = TestCaseSetBlockAPI.callAPI(user_id, type);
        if (!("1000".equals(res.code))) throw new AssertionError();
        if (!("OK".equals(res.message))) throw new AssertionError();
        System.out.println("Satisfied! Finished");

    }
}
