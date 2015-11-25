package com.app.shared.healthcontext;
import com.athena.server.bizService.DTOMapperInterface;
import java.sql.Date;

public class FindByBloodGroup implements DTOMapperInterface {

    private Date dispatchedtoPatientOnDT;

    private Date dateneededby;

    private String requestedbyHospital;

    private String requestedByDr;

    private String patientName;

    private Integer numberofUnits;

    private String bloodRequestId;

    private String bloodGrp;

    public FindByBloodGroup(Object[] aryObject) {
        if (aryObject != null) {
            dispatchedtoPatientOnDT = (java.sql.Date) aryObject[0];
            dateneededby = (java.sql.Date) aryObject[1];
            requestedbyHospital = (java.lang.String) aryObject[2];
            requestedByDr = (java.lang.String) aryObject[3];
            patientName = (java.lang.String) aryObject[4];
            numberofUnits = (java.lang.Integer) aryObject[5];
            bloodRequestId = (java.lang.String) aryObject[6];
            bloodGrp = (java.lang.String) aryObject[7];
        } else {
            dispatchedtoPatientOnDT = null;
            dateneededby = null;
            requestedbyHospital = null;
            requestedByDr = null;
            patientName = null;
            numberofUnits = null;
            bloodRequestId = null;
            bloodGrp = null;
        }
    }

    public Date getDispatchedtoPatientOnDT() {
        return dispatchedtoPatientOnDT;
    }

    public Date getDateneededby() {
        return dateneededby;
    }

    public String getRequestedbyHospital() {
        return requestedbyHospital;
    }

    public String getRequestedByDr() {
        return requestedByDr;
    }

    public String getPatientName() {
        return patientName;
    }

    public Integer getNumberofUnits() {
        return numberofUnits;
    }

    public String getBloodRequestId() {
        return bloodRequestId;
    }

    public String getBloodGrp() {
        return bloodGrp;
    }
}
