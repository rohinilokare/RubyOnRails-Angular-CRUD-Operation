class StudentsController < ApplicationController
	 protect_from_forgery with: :null_session
	def index
<<<<<<< HEAD
		students = Student.all
		render json: students
		# respond_with Student.all
	end

	def create
		# respond_with Student.create(student_params.merge)
=======
		@students = Student.all
	end

	def create
>>>>>>> 51d52c6dbb2813c3b5b91c003c6cba24213e60ee
		student = Student.new(student_params)
		student.save
	end

	private
		def student_params
<<<<<<< HEAD
			params.require(:student).permit(:roll_no, :name, :address, :standard)
=======
			params.permit(:roll_no, :name, :address, :standard)
>>>>>>> 51d52c6dbb2813c3b5b91c003c6cba24213e60ee
		end

end
