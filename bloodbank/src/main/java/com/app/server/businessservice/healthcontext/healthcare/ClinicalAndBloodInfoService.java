package com.app.server.businessservice.healthcontext.healthcare;
import com.app.server.repository.BloodInfoRepository;
import com.app.server.repository.DonorVisitRepository;
import com.app.shared.healthcare.BloodInfo;
import com.app.shared.healthcare.DonorVisit;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.ruleengine.server.bzservice.RuleEngineInterface;
import com.spartan.shield.sessionService.SessionDataMgtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;

@Component
public class ClinicalAndBloodInfoService {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private DonorVisitRepository<DonorVisit> donorVisitRepository;

    @Autowired
    private BloodInfoRepository<BloodInfo> bloodInfoRepository;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    public void clinicalAndBloodInfo(DonorVisit entity) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            if (entity == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.app.shared.healthcare.DonorVisit donorvisit_0 = donorVisitRepository.save(entity);
            ruleEngineInterface.initialize("bc1f3709-050d-45b5-ba5f-cef9d0d8d85d");
            ruleEngineInterface.add(donorvisit_0);
            ruleEngineInterface.add(runtimeLogInfoHelper);
            ruleEngineInterface.add(entity);
            ruleEngineInterface.executeRule();
            if ((com.app.shared.healthcare.BloodInfo) ruleEngineInterface.getResult("bloodinfo_1") == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.app.shared.healthcare.BloodInfo bloodinfo_2 = bloodInfoRepository.save((com.app.shared.healthcare.BloodInfo) ruleEngineInterface.getResult("bloodinfo_1"));
        } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
