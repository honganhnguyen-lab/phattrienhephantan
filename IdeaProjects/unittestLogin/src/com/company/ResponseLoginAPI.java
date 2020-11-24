package com.company;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import com.google.gson.Gson;

public class ResponseLoginAPI {
    public static ResponseLogin callAPI(String phonenumber, String password, String uuid) throws IOException {
        URL url = new URL(Constant.LOG_IN + "?phonenumber=" +phonenumber + "&password=" +password +"&uuid=" + uuid);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setDoOutput(true);
        try (DataOutputStream writer = new DataOutputStream(conn.getOutputStream())) {

            StringBuilder content;
            try (BufferedReader in = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()))) {
                String line;
                content = new StringBuilder();
                while ((line = in.readLine()) != null) {
                    content.append(line);
                    content.append(System.lineSeparator());
                }
            }
            Gson g = new Gson();
            System.out.println(content.toString());
            return g.fromJson(content.toString(), ResponseLogin.class);
        } finally {
            conn.disconnect();
        }
    }
}
