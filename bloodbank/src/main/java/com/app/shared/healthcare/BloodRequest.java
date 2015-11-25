package com.app.shared.healthcare;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;
import java.sql.Date;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import com.app.shared.EntityAudit;
import javax.persistence.Embedded;
import com.app.shared.SystemInfo;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import java.lang.Override;
import javax.persistence.NamedQueries;

@Table(name = "ast_BloodRequest_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "BloodRequest.findByBloodGroup", query = "select e from BloodRequest e where e.systemInfo.activeStatus=1 and e.bloodGroup=:bloodGroup"), @javax.persistence.NamedQuery(name = "BloodRequest.findById", query = "select e from BloodRequest e where e.systemInfo.activeStatus=1 and e.bloodRequestId =:bloodRequestId") })
public class BloodRequest implements Serializable, CommonEntityInterface, Comparator<BloodRequest> {

    @Column(name = "numberofUnits")
    @JsonProperty("numberofUnits")
    @NotNull
    @Min(0)
    @Max(2000000)
    private Integer numberofUnits;

    @Column(name = "patientName")
    @JsonProperty("patientName")
    @NotNull
    @Size(min = 0, max = 256)
    private String patientName;

    @Column(name = "requestedByDr")
    @JsonProperty("requestedByDr")
    @NotNull
    @Size(min = 0, max = 256)
    private String requestedByDr;

    @Column(name = "requestedbyHospital")
    @JsonProperty("requestedbyHospital")
    @NotNull
    @Size(min = 0, max = 256)
    private String requestedbyHospital;

    @Column(name = "dateneededby")
    @JsonProperty("dateneededby")
    @NotNull
    private Date dateneededby;

    @Column(name = "dispatchedtoPatientOnDT")
    @JsonProperty("dispatchedtoPatientOnDT")
    @NotNull
    private Date dispatchedtoPatientOnDT;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "bloodRequestId")
    @JsonProperty("bloodRequestId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String bloodRequestId;

    @Column(name = "bloodGroup")
    @JsonProperty("bloodGroup")
    private String bloodGroup;

    @Transient
    @JsonIgnore
    private EntityValidatorHelper<Object> entityValidator;

    @Version
    @Column(name = "versionId")
    @JsonProperty("versionId")
    private int versionId;

    @Embedded
    @JsonIgnore
    private EntityAudit entityAudit = new EntityAudit();

    @Embedded
    private SystemInfo systemInfo = new SystemInfo();

    @Transient
    private String primaryDisplay;

    public Integer getNumberofUnits() {
        return numberofUnits;
    }

    public void setNumberofUnits(Integer _numberofUnits) {
        if (_numberofUnits != null) {
            this.numberofUnits = _numberofUnits;
        }
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String _patientName) {
        if (_patientName != null) {
            this.patientName = _patientName;
        }
    }

    public String getRequestedByDr() {
        return requestedByDr;
    }

    public void setRequestedByDr(String _requestedByDr) {
        if (_requestedByDr != null) {
            this.requestedByDr = _requestedByDr;
        }
    }

    public String getRequestedbyHospital() {
        return requestedbyHospital;
    }

    public void setRequestedbyHospital(String _requestedbyHospital) {
        if (_requestedbyHospital != null) {
            this.requestedbyHospital = _requestedbyHospital;
        }
    }

    public Date getDateneededby() {
        return dateneededby;
    }

    public void setDateneededby(Date _dateneededby) {
        if (_dateneededby != null) {
            this.dateneededby = _dateneededby;
        }
    }

    public Date getDispatchedtoPatientOnDT() {
        return dispatchedtoPatientOnDT;
    }

    public void setDispatchedtoPatientOnDT(Date _dispatchedtoPatientOnDT) {
        if (_dispatchedtoPatientOnDT != null) {
            this.dispatchedtoPatientOnDT = _dispatchedtoPatientOnDT;
        }
    }

    public String getPrimaryKey() {
        return bloodRequestId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return bloodRequestId;
    }

    public String getBloodRequestId() {
        return bloodRequestId;
    }

    public void setBloodRequestId(String _bloodRequestId) {
        this.bloodRequestId = _bloodRequestId;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String _bloodGroup) {
        this.bloodGroup = _bloodGroup;
    }

    public int getVersionId() {
        return versionId;
    }

    public void setVersionId(int _versionId) {
        this.versionId = _versionId;
    }

    public void setPrimaryDisplay(String _primaryDisplay) {
        this.primaryDisplay = _primaryDisplay;
    }

    public SystemInfo getSystemInfo() {
        return systemInfo;
    }

    public void setSystemInfo(SystemInfo _systemInfo) {
        this.systemInfo = _systemInfo;
    }

    @JsonIgnore
    public boolean isHardDelete() {
        if (this.systemInfo == null) {
            this.systemInfo = new SystemInfo();
        }
        if (this.systemInfo.getActiveStatus() == -1) {
            return true;
        } else {
            return false;
        }
    }

    @JsonIgnore
    @Override
    public boolean isValid() throws SpartanConstraintViolationException, SpartanIncorrectDataException {
        boolean isValid = false;
        if (this.entityValidator != null) {
            isValid = this.entityValidator.validateEntity(this);
        } else {
            throw new SpartanIncorrectDataException("Entity validator is not set");
        }
        return isValid;
    }

    @Override
    public void setEntityValidator(EntityValidatorHelper<Object> _validateFactory) {
        this.entityValidator = _validateFactory;
    }

    @Override
    public void setEntityAudit(int customerId, String userId, RECORD_TYPE recordType) {
        System.out.println("Setting logged in user info for " + recordType);
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (recordType == RECORD_TYPE.ADD) {
            this.entityAudit.setCreatedBy(userId);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
        setSystemInformation(recordType);
    }

    @Override
    public void setEntityAudit(int customerId, String userId) {
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (getPrimaryKey() == null) {
            this.entityAudit.setCreatedBy(userId);
            this.systemInfo.setActiveStatus(1);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
    }

    @JsonIgnore
    public String getLoggedInUserInfo() {
        String auditInfo = "";
        if (this.entityAudit != null) {
            auditInfo = entityAudit.toString();
        }
        return auditInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemInformation(RECORD_TYPE recordType) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        if (recordType == RECORD_TYPE.DELETE) {
            this.systemInfo.setActiveStatus(0);
        } else {
            this.systemInfo.setActiveStatus(1);
        }
    }

    @JsonIgnore
    public void setSystemInformation(Integer activeStatus) {
        this.systemInfo.setActiveStatus(activeStatus);
    }

    @JsonIgnore
    public String getSystemInformation() {
        String systemInfo = "";
        if (this.systemInfo != null) {
            systemInfo = systemInfo.toString();
        }
        return systemInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemTxnCode(Integer transactionAccessCode) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        this.systemInfo.setTxnAccessCode(transactionAccessCode);
    }

    @Override
    public int compare(BloodRequest object1, BloodRequest object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((numberofUnits == null ? " " : numberofUnits) + ",");
        sb.append((patientName == null ? " " : patientName) + ",");
        sb.append((requestedByDr == null ? " " : requestedByDr) + ",");
        sb.append((requestedbyHospital == null ? " " : requestedbyHospital) + ",");
        sb.append((dateneededby == null ? " " : dateneededby) + ",");
        sb.append((dispatchedtoPatientOnDT == null ? " " : dispatchedtoPatientOnDT));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (bloodRequestId == null) {
            return super.hashCode();
        } else {
            return bloodRequestId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.healthcare.BloodRequest other = (com.app.shared.healthcare.BloodRequest) obj;
            if (bloodRequestId == null) {
                return false;
            } else if (!bloodRequestId.equals(other.bloodRequestId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
