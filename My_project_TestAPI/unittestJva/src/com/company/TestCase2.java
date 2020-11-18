package com.company;

public class TestCase2 {
    public static void UnitTest2(String token, String pass, String newpass) throws Exception{
        System.out.println("Unit test 2: Token is incorrect");
        ResponseChangePass ress = TestCaseChangePassAPI.callAPI(token,pass,newpass);
        if (!(ress.code.equals("9998"))) throw new AssertionError();
        if (!(ress.message.equals("Token is invalid"))) throw new AssertionError();
        TestCaseLoginAPI.callAPI();
        System.out.println("Finished");


    }
}