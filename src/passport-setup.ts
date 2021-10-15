import passport from 'passport';
import { Request } from 'express';
import { Strategy, Profile } from 'passport-google-oauth20';
import { User } from './repositories';

const clientID: string = '575712616482-40fnfm93m4jfumrpdhsar2v253bfal26.apps.googleusercontent.com';
const clientSecret: string = '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';
const callbackURL: string = 'http://localhost:8000/login/token';

export function setupPassport() {
        passport.use(new Strategy({
        clientID,
        clientSecret,
        callbackURL,
        passReqToCallback: true,
    },
        (request: Request, accessToken: string, refreshToken: string, profile: Profile, done) => {
            const user = User.findOne({ where: { email: profile.emails } });
            request.user = {
                accessToken,
                refreshToken,
                profile,
            }
            return done(null, user);
        }
    ));

    passport.serializeUser((user, done) => {
        return done(null, user);
    });

    passport.deserializeUser((user, done) => {
        return done(null, user);
    });
};