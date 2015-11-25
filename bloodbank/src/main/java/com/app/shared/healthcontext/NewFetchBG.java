package com.app.shared.healthcontext;
import com.athena.server.bizService.DTOMapperInterface;

public class NewFetchBG implements DTOMapperInterface {

    private String bloodGrp;

    public NewFetchBG(Object obj) {
        if (obj != null) {
            bloodGrp = (java.lang.String) obj;
        } else {
            bloodGrp = null;
        }
    }

    public String getBloodGrp() {
        return bloodGrp;
    }
}
