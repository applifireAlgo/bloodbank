package com.app.shared.healthcontext;
import com.athena.server.bizService.DTOMapperInterface;

public class StockUpdate implements DTOMapperInterface {

    private Integer numberofUnits;

    private String bloodGroup;

    private String donorId;

    public StockUpdate(Object[] aryObject) {
        if (aryObject != null) {
            numberofUnits = (java.lang.Integer) aryObject[0];
            bloodGroup = (java.lang.String) aryObject[1];
            donorId = (java.lang.String) aryObject[2];
        } else {
            numberofUnits = null;
            bloodGroup = null;
            donorId = null;
        }
    }

    public Integer getNumberofUnits() {
        return numberofUnits;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public String getDonorId() {
        return donorId;
    }
}
