const ContactMap = () => {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Map Placeholder */}
                    <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 lg:h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1388.9911617035993!2d106.71786469257253!3d-6.365116452631683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5f4bd40e95b%3A0xe53766ef1af248c5!2sJl.%20Dara%205%2C%20Pd.%20Petir%2C%20Kec.%20Bojongsari%2C%20Kota%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1765033105237!5m2!1sid!2sid"
                            width={600}
                            height={500}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Store Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-medium text-neutral-900">Visit Our Flagship Store</h2>
                            <p className="text-lg text-neutral-600">
                                Experience our collections in person at our New York flagship location. Our team of style experts is ready to help you
                                find the perfect pieces.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="text-lg text-neutral-900">Store Hours</div>
                                <div className="space-y-1 text-lg text-neutral-600">
                                    <div className="flex max-w-sm justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex max-w-sm justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex max-w-sm justify-between">
                                        <span>Sunday</span>
                                        <span>11:00 AM - 6:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 text-lg">
                                <div className="text-neutral-900">Services Available</div>
                                <ul className="space-y-1 text-neutral-600">
                                    <li>• Personal styling consultations</li>
                                    <li>• Custom tailoring services</li>
                                    <li>• Easy returns and exchanges</li>
                                    <li>• Private shopping appointments</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <button className="rounded-full bg-neutral-900 px-8 py-3 text-white transition-colors hover:bg-neutral-800">
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;
