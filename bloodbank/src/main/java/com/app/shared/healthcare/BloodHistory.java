package com.app.shared.healthcare;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Date;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;
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

@Table(name = "ast_BloodHistory_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "BloodHistory.findByBloodInfo", query = "select e from BloodHistory e where e.systemInfo.activeStatus=1 and e.bloodInfo=:bloodInfo"), @javax.persistence.NamedQuery(name = "BloodHistory.findById", query = "select e from BloodHistory e where e.systemInfo.activeStatus=1 and e.bloodHistoryId =:bloodHistoryId") })
public class BloodHistory implements Serializable, CommonEntityInterface, Comparator<BloodHistory> {

    @Column(name = "collectedDate")
    @JsonProperty("collectedDate")
    @NotNull
    private Date collectedDate;

    @Column(name = "expDate")
    @JsonProperty("expDate")
    @NotNull
    private Date expDate;

    @Column(name = "bloodReport")
    @JsonProperty("bloodReport")
    @NotNull
    private String bloodReport;

    @Column(name = "isTested")
    @JsonProperty("isTested")
    @NotNull
    private Boolean isTested;

    @Column(name = "noOfUnits")
    @JsonProperty("noOfUnits")
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer noOfUnits;

    @Column(name = "height")
    @JsonProperty("height")
    @Size(min = 0, max = 256)
    private String height;

    @Column(name = "weight")
    @JsonProperty("weight")
    @Size(min = 0, max = 256)
    private String weight;

    @Column(name = "temp")
    @JsonProperty("temp")
    @Size(min = 0, max = 256)
    private String temp;

    @Column(name = "bp")
    @JsonProperty("bp")
    @Size(min = 0, max = 256)
    private String bp;

    @Column(name = "pulse")
    @JsonProperty("pulse")
    @Size(min = 0, max = 256)
    private String pulse;

    @Column(name = "unitsOfBlood")
    @JsonProperty("unitsOfBlood")
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer unitsOfBlood;

    @Column(name = "clinicalInfo")
    @JsonProperty("clinicalInfo")
    @Size(min = 0, max = 256)
    private String clinicalInfo;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "bloodHistoryId")
    @JsonProperty("bloodHistoryId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String bloodHistoryId;

    @Column(name = "bloodInfo")
    @JsonProperty("bloodInfo")
    private String bloodInfo;

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

    public Date getCollectedDate() {
        return collectedDate;
    }

    public void setCollectedDate(Date _collectedDate) {
        if (_collectedDate != null) {
            this.collectedDate = _collectedDate;
        }
    }

    public Date getExpDate() {
        return expDate;
    }

    public void setExpDate(Date _expDate) {
        if (_expDate != null) {
            this.expDate = _expDate;
        }
    }

    public String getBloodReport() {
        return bloodReport;
    }

    public void setBloodReport(String _bloodReport) {
        if (_bloodReport != null) {
            this.bloodReport = _bloodReport;
        }
    }

    public Boolean getIsTested() {
        return isTested;
    }

    public void setIsTested(Boolean _isTested) {
        if (_isTested != null) {
            this.isTested = _isTested;
        }
    }

    public Integer getNoOfUnits() {
        return noOfUnits;
    }

    public void setNoOfUnits(Integer _noOfUnits) {
        this.noOfUnits = _noOfUnits;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String _height) {
        this.height = _height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String _weight) {
        this.weight = _weight;
    }

    public String getTemp() {
        return temp;
    }

    public void setTemp(String _temp) {
        this.temp = _temp;
    }

    public String getBp() {
        return bp;
    }

    public void setBp(String _bp) {
        this.bp = _bp;
    }

    public String getPulse() {
        return pulse;
    }

    public void setPulse(String _pulse) {
        this.pulse = _pulse;
    }

    public Integer getUnitsOfBlood() {
        return unitsOfBlood;
    }

    public void setUnitsOfBlood(Integer _unitsOfBlood) {
        this.unitsOfBlood = _unitsOfBlood;
    }

    public String getClinicalInfo() {
        return clinicalInfo;
    }

    public void setClinicalInfo(String _clinicalInfo) {
        this.clinicalInfo = _clinicalInfo;
    }

    public String getPrimaryKey() {
        return bloodHistoryId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return bloodHistoryId;
    }

    public String getBloodHistoryId() {
        return bloodHistoryId;
    }

    public void setBloodHistoryId(String _bloodHistoryId) {
        this.bloodHistoryId = _bloodHistoryId;
    }

    public String getBloodInfo() {
        return bloodInfo;
    }

    public void setBloodInfo(String _bloodInfo) {
        this.bloodInfo = _bloodInfo;
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
    public int compare(BloodHistory object1, BloodHistory object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((collectedDate == null ? " " : collectedDate) + ",");
        sb.append((expDate == null ? " " : expDate) + ",");
        sb.append((height == null ? " " : height) + ",");
        sb.append((weight == null ? " " : weight) + ",");
        sb.append((temp == null ? " " : temp) + ",");
        sb.append((bp == null ? " " : bp) + ",");
        sb.append((pulse == null ? " " : pulse) + ",");
        sb.append((unitsOfBlood == null ? " " : unitsOfBlood) + ",");
        sb.append((clinicalInfo == null ? " " : clinicalInfo));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (bloodHistoryId == null) {
            return super.hashCode();
        } else {
            return bloodHistoryId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.healthcare.BloodHistory other = (com.app.shared.healthcare.BloodHistory) obj;
            if (bloodHistoryId == null) {
                return false;
            } else if (!bloodHistoryId.equals(other.bloodHistoryId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
