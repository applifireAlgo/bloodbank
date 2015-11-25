package com.app.shared.healthcare;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.Size;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import com.app.shared.EntityAudit;
import javax.persistence.Embedded;
import com.app.shared.SystemInfo;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import java.lang.Override;
import javax.persistence.NamedQueries;

@Table(name = "ast_DonorVisit_T")
@Entity
@JsonIdentityInfo(generator = PropertyGenerator.class, property = "visitId")
@NamedQueries({ @javax.persistence.NamedQuery(name = "DonorVisit.findByDonationType", query = "select e from DonorVisit e where e.systemInfo.activeStatus=1 and e.donationType=:donationType"), @javax.persistence.NamedQuery(name = "DonorVisit.findByDonorId", query = "select e from DonorVisit e where e.systemInfo.activeStatus=1 and e.donorId=:donorId"), @javax.persistence.NamedQuery(name = "DonorVisit.findByCity", query = "select e from DonorVisit e where e.systemInfo.activeStatus=1 and e.city=:city"), @javax.persistence.NamedQuery(name = "DonorVisit.findByCampId", query = "select e from DonorVisit e where e.systemInfo.activeStatus=1 and e.campId=:campId"), @javax.persistence.NamedQuery(name = "DonorVisit.findById", query = "select e from DonorVisit e where e.systemInfo.activeStatus=1 and e.visitId =:visitId") })
public class DonorVisit implements Serializable, CommonEntityInterface, Comparator<DonorVisit> {

    @Column(name = "orgnizerName")
    @JsonProperty("orgnizerName")
    @Size(min = 0, max = 256)
    private String orgnizerName;

    @Column(name = "campAddress")
    @JsonProperty("campAddress")
    @Size(min = 0, max = 256)
    private String campAddress;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "visitId")
    @JsonProperty("visitId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String visitId;

    @Column(name = "donationType")
    @JsonProperty("donationType")
    private String donationType;

    @Column(name = "donorId")
    @JsonProperty("donorId")
    private String donorId;

    @Column(name = "city")
    @JsonProperty("city")
    private String city;

    @Column(name = "campId")
    @JsonProperty("campId")
    private String campId;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "donorVisit")
    private ClinicalInfo clinicalInfo;

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

    public String getOrgnizerName() {
        return orgnizerName;
    }

    public void setOrgnizerName(String _orgnizerName) {
        this.orgnizerName = _orgnizerName;
    }

    public String getCampAddress() {
        return campAddress;
    }

    public void setCampAddress(String _campAddress) {
        this.campAddress = _campAddress;
    }

    public String getPrimaryKey() {
        return visitId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return visitId;
    }

    public String getVisitId() {
        return visitId;
    }

    public void setVisitId(String _visitId) {
        this.visitId = _visitId;
    }

    public String getDonationType() {
        return donationType;
    }

    public void setDonationType(String _donationType) {
        this.donationType = _donationType;
    }

    public String getDonorId() {
        return donorId;
    }

    public void setDonorId(String _donorId) {
        this.donorId = _donorId;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String _city) {
        this.city = _city;
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

    public ClinicalInfo getClinicalInfo() {
        return clinicalInfo;
    }

    public void setClinicalInfo(ClinicalInfo _clinicalInfo) {
        if (_clinicalInfo.getDonorVisit() == null) {
            _clinicalInfo.setDonorVisit(this);
        }
        this.clinicalInfo = _clinicalInfo;
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
    public int compare(DonorVisit object1, DonorVisit object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((orgnizerName == null ? " " : orgnizerName) + ",");
        sb.append((campAddress == null ? " " : campAddress));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (visitId == null) {
            return super.hashCode();
        } else {
            return visitId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.healthcare.DonorVisit other = (com.app.shared.healthcare.DonorVisit) obj;
            if (visitId == null) {
                return false;
            } else if (!visitId.equals(other.visitId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
