import tornado.ioloop
from tornado.web import Application

from sqlalchemy.orm import sessionmaker

from make_db import engine
from settings import HOST, PORT
from handlers import StudentHandler


Session = sessionmaker(bind=engine)
handlers = [
    # (.*)
    (r"/students/?", StudentHandler, {'session': Session}),
]

if __name__ == "__main__":
    app = Application(
        handlers,
        debug=True
    )

    print(f'Listening on port {PORT}.\nPress Ctrl^C to stop.')

    app.listen(PORT, HOST)
    loop = tornado.ioloop.IOLoop.instance()

    try:
        loop.start()
    except KeyboardInterrupt:
        print('Shutting down...')
    finally:
        loop.close()
        engine.dispose()