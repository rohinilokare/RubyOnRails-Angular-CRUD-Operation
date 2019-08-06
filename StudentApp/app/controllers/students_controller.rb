module Api
class StudentsController < ApplicationController
    respond_to :json

    def index
      respond_with Student.all
    end
end
