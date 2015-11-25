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

@Table(name = "ast_BloodInfo_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "BloodInfo.findByVisitId", query = "select e from BloodInfo e where e.systemInfo.activeStatus=1 and e.visitId=:visitId"), @javax.persistence.NamedQuery(name = "BloodInfo.findById", query = "select e from BloodInfo e where e.systemInfo.activeStatus=1 and e.bInfoId =:bInfoId") })
public class BloodInfo implements Serializable, CommonEntityInterface, Comparator<BloodInfo> {

    @Column(name = "collectedDate")
    @JsonProperty("collectedDate")
    @NotNull
    private Date collectedDate;

    @Column(name = "expDate")
    @JsonProperty("expDate")
    private Date expDate;

    @Column(name = "bloodReport")
    @JsonProperty("bloodReport")
    private String bloodReport;

    @Column(name = "isTested")
    @JsonProperty("isTested")
    private Boolean isTested = false;

    @Column(name = "noOfUnits")
    @JsonProperty("noOfUnits")
    @Min(0)
    @Max(20000)
    private Integer noOfUnits;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "bInfoId")
    @JsonProperty("bInfoId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String bInfoId;

    @Column(name = "visitId")
    @JsonProperty("visitId")
    private String visitId;

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
        this.expDate = _expDate;
    }

    public String getBloodReport() {
        return bloodReport;
    }

    public void setBloodReport(String _bloodReport) {
        this.bloodReport = _bloodReport;
    }

    public Boolean getIsTested() {
        return isTested;
    }

    public void setIsTested(Boolean _isTested) {
        this.isTested = _isTested;
    }

    public Integer getNoOfUnits() {
        return noOfUnits;
    }

    public void setNoOfUnits(Integer _noOfUnits) {
        this.noOfUnits = _noOfUnits;
    }

    public String getPrimaryKey() {
        return bInfoId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return bInfoId;
    }

    public String getbInfoId() {
        return bInfoId;
    }

    public void setbInfoId(String _bInfoId) {
        this.bInfoId = _bInfoId;
    }

    public String getVisitId() {
        return visitId;
    }

    public void setVisitId(String _visitId) {
        this.visitId = _visitId;
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
    public int compare(BloodInfo object1, BloodInfo object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((noOfUnits == null ? " " : noOfUnits));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (bInfoId == null) {
            return super.hashCode();
        } else {
            return bInfoId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.healthcare.BloodInfo other = (com.app.shared.healthcare.BloodInfo) obj;
            if (bInfoId == null) {
                return false;
            } else if (!bInfoId.equals(other.bInfoId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
