const prisma = require('../config/database');

async function createDiagnosis(req, res) {
  const diagnosis = await prisma.diagnosisRequest.create({
    data: {
      ...req.body,
      company: req.body.company || null,
      machineryAge: req.body.machineryAge || null,
    },
  });

  res.status(201).json({
    message: 'Diagnosis request received',
    diagnosis,
  });
}

async function listDiagnoses(req, res) {
  const diagnoses = await prisma.diagnosisRequest.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
  });

  res.json({ diagnoses });
}

async function getDiagnosis(req, res) {
  const diagnosis = await prisma.diagnosisRequest.findUnique({
    where: { id: req.params.id },
    include: { attachments: true },
  });

  if (!diagnosis) {
    return res.status(404).json({
      error: {
        message: 'Diagnosis request not found',
        code: 'DIAGNOSIS_NOT_FOUND',
      },
    });
  }

  return res.json({ diagnosis });
}

async function updateDiagnosis(req, res) {
  const diagnosis = await prisma.diagnosisRequest.update({
    where: { id: req.params.id },
    data: req.body,
  });

  res.json({ diagnosis });
}

module.exports = {
  createDiagnosis,
  listDiagnoses,
  getDiagnosis,
  updateDiagnosis,
};
