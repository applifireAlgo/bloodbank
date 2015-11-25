package com.app.server.service;
import com.athena.annotation.Complexity;
import com.athena.annotation.SourceCodeAuthorClass;
import com.athena.framework.server.bean.ResponseBean;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import org.springframework.http.HttpEntity;
import com.app.shared.healthcare.RegisterACamp;
import com.athena.framework.server.exception.repository.SpartanTransactionException;
import java.util.List;
import com.athena.framework.server.bean.FindByBean;

@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "10", comments = "Service for RegisterACamp Transaction table", complexity = Complexity.MEDIUM)
public abstract class RegisterACampService {

    public HttpEntity<ResponseBean> findAll() throws Exception, SpartanPersistenceException {
        return null;
    }

    public HttpEntity<ResponseBean> save(RegisterACamp entity) throws Exception, SpartanTransactionException, SpartanPersistenceException {
        return null;
    }

    public HttpEntity<ResponseBean> save(List<RegisterACamp> entity, boolean isArray) throws Exception, SpartanTransactionException, SpartanPersistenceException {
        return null;
    }

    public HttpEntity<ResponseBean> delete(String id) throws SpartanTransactionException, SpartanPersistenceException, Exception {
        return null;
    }

    public HttpEntity<ResponseBean> update(RegisterACamp entity) throws SpartanTransactionException, SpartanPersistenceException, Exception {
        return null;
    }

    public HttpEntity<ResponseBean> update(List<RegisterACamp> entity, boolean isArray) throws SpartanTransactionException, SpartanPersistenceException, Exception {
        return null;
    }

    public HttpEntity<ResponseBean> findByAddressId(FindByBean findByBean) throws SpartanPersistenceException, Exception {
        return null;
    }

    public HttpEntity<ResponseBean> findById(FindByBean findByBean) throws SpartanPersistenceException, Exception {
        return null;
    }
}
