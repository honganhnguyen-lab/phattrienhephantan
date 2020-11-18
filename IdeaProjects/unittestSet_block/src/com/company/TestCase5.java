package com.company;

public class TestCase5 {
    public static void Unittest5() throws Exception {
        String user_id = "134";
        Integer type = 1;
        String main_id ="134";
        if(user_id.equals(main_id)){
            System.out.println("User_id is your id account");
        } else{
            throw new AssertionError();
        }
        ResponseSetBlock res = TestCaseSetBlockAPI.callAPI(user_id,type);
        if (((!("1003").equals(res.code)))) throw new AssertionError();
        if ((!("Parameter value is invalid").equals(res.message)))
            throw new AssertionError(res.message + "with code" + res.code);

    }
}
