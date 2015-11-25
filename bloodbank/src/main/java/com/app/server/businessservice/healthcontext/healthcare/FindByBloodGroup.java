package com.app.server.businessservice.healthcontext.healthcare;
import com.app.server.businessservice.healthcontext.FindByBloodGroupServiceBzService;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.spartan.shield.sessionService.SessionDataMgtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import java.util.List;

@Component
public class FindByBloodGroup {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private FindByBloodGroupServiceBzService findByBloodGroupServiceBzService;

    public List<com.app.shared.healthcontext.FindByBloodGroup> findByBloodGroup() throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        java.util.List<com.app.shared.healthcontext.FindByBloodGroup> findbybloodgroup_0 = null;
        try {
            findbybloodgroup_0 = findByBloodGroupServiceBzService.executeQueryFindByBloodGroup();
            return findbybloodgroup_0;
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
