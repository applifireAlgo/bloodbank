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

@Table(name = "ast_RegisterADonor_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "RegisterADonor.findByGender", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.gender=:gender"), @javax.persistence.NamedQuery(name = "RegisterADonor.findByBloodGroup", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.bloodGroup=:bloodGroup"), @javax.persistence.NamedQuery(name = "RegisterADonor.findByAddressId", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.address.addressId=:addressId"), @javax.persistence.NamedQuery(name = "RegisterADonor.findById", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.donorId =:donorId") })
public class RegisterADonor implements Serializable, CommonEntityInterface, Comparator<RegisterADonor> {

    @Column(name = "dName")
    @JsonProperty("dName")
    @NotNull
    @Size(min = 0, max = 256)
    private String dName;

    @Column(name = "dob")
    @JsonProperty("dob")
    @NotNull
    private Date dob;

    @Column(name = "phone")
    @JsonProperty("phone")
    @NotNull
    @Size(min = 0, max = 256)
    private String phone;

    @Column(name = "emailId")
    @JsonProperty("emailId")
    @NotNull
    @Size(min = 0, max = 256)
    private String emailId;

    @Column(name = "lastDate")
    @JsonProperty("lastDate")
    private Date lastDate;

    @Column(name = "howOften")
    @JsonProperty("howOften")
    @Size(min = 0, max = 256)
    private String howOften;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "donorId")
    @JsonProperty("donorId")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 256)
    private String donorId;

    @Column(name = "gender")
    @JsonProperty("gender")
    private String gender;

    @Column(name = "bloodGroup")
    @JsonProperty("bloodGroup")
    private String bloodGroup;

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

    public String getdName() {
        return dName;
    }

    public void setdName(String _dName) {
        if (_dName != null) {
            this.dName = _dName;
        }
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date _dob) {
        if (_dob != null) {
            this.dob = _dob;
        }
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String _phone) {
        if (_phone != null) {
            this.phone = _phone;
        }
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String _emailId) {
        if (_emailId != null) {
            this.emailId = _emailId;
        }
    }

    public Date getLastDate() {
        return lastDate;
    }

    public void setLastDate(Date _lastDate) {
        this.lastDate = _lastDate;
    }

    public String getHowOften() {
        return howOften;
    }

    public void setHowOften(String _howOften) {
        this.howOften = _howOften;
    }

    public String getPrimaryKey() {
        return donorId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return donorId;
    }

    public String getDonorId() {
        return donorId;
    }

    public void setDonorId(String _donorId) {
        this.donorId = _donorId;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String _gender) {
        this.gender = _gender;
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
    public int compare(RegisterADonor object1, RegisterADonor object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((dName == null ? " " : dName));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (donorId == null) {
            return super.hashCode();
        } else {
            return donorId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.healthcare.RegisterADonor other = (com.app.shared.healthcare.RegisterADonor) obj;
            if (donorId == null) {
                return false;
            } else if (!donorId.equals(other.donorId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
