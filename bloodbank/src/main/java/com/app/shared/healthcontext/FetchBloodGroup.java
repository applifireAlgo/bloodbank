package com.app.shared.healthcontext;
import com.athena.server.bizService.DTOMapperInterface;

public class FetchBloodGroup implements DTOMapperInterface {

    private String bloodGroup;

    public FetchBloodGroup(Object obj) {
        if (obj != null) {
            bloodGroup = (java.lang.String) obj;
        } else {
            bloodGroup = null;
        }
    }

    public String getBloodGroup() {
        return bloodGroup;
    }
}
