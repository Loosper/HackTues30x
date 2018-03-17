import tornado.ioloop
from tornado.web import Application, StaticFileHandler

from sqlalchemy.orm import sessionmaker

from db_schema import engine
from settings import HOST, PORT, ROOT
from handlers import StudentHandler, SingleStaticHandler, TeacherHandler,\
    ScheduleHandler, StudentClassHandler, AttendanceHanlder,\
    TeacherAttendanceHandler, StudentAttendanceHandler


Session = sessionmaker(bind=engine)
handlers = [
    # REVIEW: there is un inconsitency with the argument pathing
    # TODO: unify them
    (r'/', SingleStaticHandler, {'path': ROOT + '/client/index.html'}),
    (r'/students/?', StudentHandler),
    (r'/teachers/?', TeacherHandler),
    (r'/schedules/class(?:/?|/([0-9]+))/?', ScheduleHandler),
    (r'/classes(?:/?|/([0-9]+))/?', StudentClassHandler),
    (
        r'/attendances/(student|schedule|class)(?:/?$|/([0-9]+))(/?|/total)/?',
        AttendanceHanlder,
    ),
    (r'/current_attendaces/student/([0-9]+)/?', StudentAttendanceHandler),
    (r'/current_attendaces/teacher/([0-9]+)/?', TeacherAttendanceHandler),
    (r'/static/(.*)/?', StaticFileHandler, {'path': ROOT + '/client'}),
]

if __name__ == "__main__":
    app = Application(
        handlers,
        session=Session,
        debug=True
    )

    print('Listening on port {}.\nPress Ctrl^C to stop.'.format(PORT))

    app.listen(PORT, HOST)
    loop = tornado.ioloop.IOLoop.instance()

    try:
        loop.start()
    except KeyboardInterrupt:
        print('Shutting down...')
    finally:
        loop.close()
        engine.dispose()
