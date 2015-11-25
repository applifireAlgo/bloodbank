package com.app.server.repository;
import com.athena.server.repository.SearchInterface;
import com.athena.annotation.Complexity;
import com.athena.annotation.SourceCodeAuthorClass;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import java.util.List;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;

@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "6", comments = "Repository for RegisterADonor Transaction table", complexity = Complexity.MEDIUM)
public interface RegisterADonorRepository<T> extends SearchInterface {

    public List<T> findAll() throws SpartanPersistenceException;

    public T save(T entity) throws SpartanPersistenceException;

    public List<T> save(List<T> entity) throws SpartanPersistenceException;

    public void delete(String id) throws SpartanPersistenceException;

    public void update(T entity) throws SpartanConstraintViolationException, SpartanPersistenceException;

    public void update(List<T> entity) throws SpartanPersistenceException;

    public List<T> findByGender(String gender) throws Exception, SpartanPersistenceException;

    public List<T> findByBloodGroup(String bloodGroup) throws Exception, SpartanPersistenceException;

    public List<T> findByAddressId(String addressId) throws Exception, SpartanPersistenceException;

    public T findById(String donorId) throws Exception, SpartanPersistenceException;
}
