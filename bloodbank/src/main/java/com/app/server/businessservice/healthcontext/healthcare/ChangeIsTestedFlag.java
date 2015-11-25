package com.app.server.businessservice.healthcontext.healthcare;
import com.app.server.repository.BloodInfoRepository;
import com.app.shared.healthcare.BloodInfo;
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
public class ChangeIsTestedFlag {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    @Autowired
    private BloodInfoRepository<BloodInfo> bloodInfoRepository;

    public void proChangeIsTestedFlag(BloodInfo abc) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            if (abc == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.app.shared.healthcare.BloodInfo bloodinfo_5 = bloodInfoRepository.save(abc);
            ruleEngineInterface.initialize("656dbd8d-d2bd-476d-8805-5abd1f5eaef9");
            ruleEngineInterface.add(bloodinfo_5);
            ruleEngineInterface.add(runtimeLogInfoHelper);
            ruleEngineInterface.add(abc);
            ruleEngineInterface.executeRule();
            bloodInfoRepository.update((com.app.shared.healthcare.BloodInfo) ruleEngineInterface.getResult("bloodinfo_5"));
        } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
