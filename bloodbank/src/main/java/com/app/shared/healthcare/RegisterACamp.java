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
import java.sql.Date;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.app.shared.location.Address;
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
import javax.persistence.NamedQueries;

@Table(name = "ast_RegisterACamp_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "RegisterACamp.findByAddressId", query = "select e from RegisterACamp e where e.systemInfo.activeStatus=1 and e.address.addressId=:addressId"), @javax.persistence.NamedQuery(name = "RegisterACamp.findById", query = "select e from RegisterACamp e where e.systemInfo.activeStatus=1 and e.campId =:campId") })
public class RegisterACamp implements Serializable, CommonEntityInterface, Comparator<RegisterACamp> {

    @Column(name = "orgName")
    @JsonProperty("orgName")
    @NotNull
    @Size(min = 0, max = 256)
    private String orgName;

    @Column(name = "rsnForCamp")
    @JsonProperty("rsnForCamp")
    @NotNull
    @Size(min = 0, max = 256)
    private String rsnForCamp;

    @Column(name = "bloodBankName")
    @JsonProperty("bloodBankName")
    @NotNull
    @Size(min = 0, max = 256)
    private String bloodBankName;

    @Column(name = "fromDate")
    @JsonProperty("fromDate")
    @NotNull
    private Date fromDate;

    @Column(name = "campTime")
    @JsonProperty("campTime")
    @NotNull
    @Size(min = 0, max = 256)
    private String campTime;

    @Column(name = "expectedCnt")
    @JsonProperty("expectedCnt")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer expectedCnt;

    @Column(name = "arrivedCnt")
    @JsonProperty("arrivedCnt")
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer arrivedCnt;

    @Column(name = "bledCnt")
    @JsonProperty("bledCnt")
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer bledCnt;

    @Column(name = "toDate")
    @JsonProperty("toDate")
    @NotNull
    private Date toDate;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "campId")
    @JsonProperty("campId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String campId;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "addressId", referencedColumnName = "addressId")
    private Address address;

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

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String _orgName) {
        if (_orgName != null) {
            this.orgName = _orgName;
        }
    }

    public String getRsnForCamp() {
        return rsnForCamp;
    }

    public void setRsnForCamp(String _rsnForCamp) {
        if (_rsnForCamp != null) {
            this.rsnForCamp = _rsnForCamp;
        }
    }

    public String getBloodBankName() {
        return bloodBankName;
    }

    public void setBloodBankName(String _bloodBankName) {
        if (_bloodBankName != null) {
            this.bloodBankName = _bloodBankName;
        }
    }

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date _fromDate) {
        if (_fromDate != null) {
            this.fromDate = _fromDate;
        }
    }

    public String getCampTime() {
        return campTime;
    }

    public void setCampTime(String _campTime) {
        if (_campTime != null) {
            this.campTime = _campTime;
        }
    }

    public Integer getExpectedCnt() {
        return expectedCnt;
    }

    public void setExpectedCnt(Integer _expectedCnt) {
        if (_expectedCnt != null) {
            this.expectedCnt = _expectedCnt;
        }
    }

    public Integer getArrivedCnt() {
        return arrivedCnt;
    }

    public void setArrivedCnt(Integer _arrivedCnt) {
        this.arrivedCnt = _arrivedCnt;
    }

    public Integer getBledCnt() {
        return bledCnt;
    }

    public void setBledCnt(Integer _bledCnt) {
        this.bledCnt = _bledCnt;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date _toDate) {
        if (_toDate != null) {
            this.toDate = _toDate;
        }
    }

    public String getPrimaryKey() {
        return campId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return campId;
    }

    public String getCampId() {
        return campId;
    }

    public void setCampId(String _campId) {
        this.campId = _campId;
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

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address _address) {
        this.address = _address;
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
    public int compare(RegisterACamp object1, RegisterACamp object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((orgName == null ? " " : orgName));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (campId == null) {
            return super.hashCode();
        } else {
            return campId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.healthcare.RegisterACamp other = (com.app.shared.healthcare.RegisterACamp) obj;
            if (campId == null) {
                return false;
            } else if (!campId.equals(other.campId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
