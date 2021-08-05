class BaseController {
  getValidationError(validation) {
    const errors = validation.error?.details || [];

    return errors.map((error) => error.message);
  }

  sendSuccessResponse(res) {}

  sendErrorResponse(res, error) {
    res.status(400).send({ error });
  }
}

module.exports = BaseController;
