package com.app.shared.healthcare;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import com.app.shared.EntityAudit;
import javax.persistence.Embedded;
import com.app.shared.SystemInfo;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import java.lang.Override;

@Table(name = "ast_ClinicalInfo_TP")
@Entity
public class ClinicalInfo implements Serializable, CommonEntityInterface, Comparator<ClinicalInfo> {

    @Column(name = "height")
    @JsonProperty("height")
    @NotNull
    @Size(min = 0, max = 256)
    private String height;

    @Column(name = "weight")
    @JsonProperty("weight")
    @NotNull
    @Size(min = 0, max = 256)
    private String weight;

    @Column(name = "temp")
    @JsonProperty("temp")
    @NotNull
    @Size(min = 0, max = 256)
    private String temp;

    @Column(name = "bp")
    @JsonProperty("bp")
    @NotNull
    @Size(min = 0, max = 256)
    private String bp;

    @Column(name = "pulse")
    @JsonProperty("pulse")
    @NotNull
    @Size(min = 0, max = 256)
    private String pulse;

    @Column(name = "unitsOfBlood")
    @JsonProperty("unitsOfBlood")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer unitsOfBlood;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "dVisitId")
    @JsonProperty("dVisitId")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 256)
    private String dVisitId;

    @OneToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    @JoinColumn(name = "visitId", referencedColumnName = "visitId")
    private DonorVisit donorVisit;

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

    public String getHeight() {
        return height;
    }

    public void setHeight(String _height) {
        if (_height != null) {
            this.height = _height;
        }
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String _weight) {
        if (_weight != null) {
            this.weight = _weight;
        }
    }

    public String getTemp() {
        return temp;
    }

    public void setTemp(String _temp) {
        if (_temp != null) {
            this.temp = _temp;
        }
    }

    public String getBp() {
        return bp;
    }

    public void setBp(String _bp) {
        if (_bp != null) {
            this.bp = _bp;
        }
    }

    public String getPulse() {
        return pulse;
    }

    public void setPulse(String _pulse) {
        if (_pulse != null) {
            this.pulse = _pulse;
        }
    }

    public Integer getUnitsOfBlood() {
        return unitsOfBlood;
    }

    public void setUnitsOfBlood(Integer _unitsOfBlood) {
        if (_unitsOfBlood != null) {
            this.unitsOfBlood = _unitsOfBlood;
        }
    }

    public String getPrimaryKey() {
        return dVisitId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return dVisitId;
    }

    public String getdVisitId() {
        return dVisitId;
    }

    public void setdVisitId(String _dVisitId) {
        this.dVisitId = _dVisitId;
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

    public DonorVisit getDonorVisit() {
        return donorVisit;
    }

    public void setDonorVisit(DonorVisit _donorVisit) {
        this.donorVisit = _donorVisit;
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
    public int compare(ClinicalInfo object1, ClinicalInfo object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (dVisitId == null) {
            return super.hashCode();
        } else {
            return dVisitId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.healthcare.ClinicalInfo other = (com.app.shared.healthcare.ClinicalInfo) obj;
            if (dVisitId == null) {
                return false;
            } else if (!dVisitId.equals(other.dVisitId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
