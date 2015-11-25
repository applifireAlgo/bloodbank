package com.app.shared.healthcontext.healthcare;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DonorRequest {

    @Min(0)
    @Max(65535)
    private String bloodGrp;

    @Min(0)
    @Max(65535)
    private String dateneededby;

    @Min(0)
    @Max(65535)
    private String numberofUnits;

    @Min(0)
    @Max(65535)
    private String requestedByDr;

    public String getBloodGrp() {
        return bloodGrp;
    }

    public void setBloodGrp(String _bloodGrp) {
        this.bloodGrp = _bloodGrp;
    }

    public String getDateneededby() {
        return dateneededby;
    }

    public void setDateneededby(String _dateneededby) {
        this.dateneededby = _dateneededby;
    }

    public String getNumberofUnits() {
        return numberofUnits;
    }

    public void setNumberofUnits(String _numberofUnits) {
        this.numberofUnits = _numberofUnits;
    }

    public String getRequestedByDr() {
        return requestedByDr;
    }

    public void setRequestedByDr(String _requestedByDr) {
        this.requestedByDr = _requestedByDr;
    }
}
