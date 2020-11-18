package com.company;



public class TestCase1 {
    public static void UnitTest1(String token, String passwd, String newpass) throws Exception  {

        System.out.println("Unit test 1: Change Password Satisfied");
        ResponseChangePass res = TestCaseChangePassAPI.callAPI(token, passwd, newpass);
        if(("1000".equals(res.code)))throw new AssertionError();
        if(!("OK".equals(res.message)))throw new AssertionError();
        System.out.println("Finished!");
    }
}
