const GeneralUtil = {
    formatTime (date: Date): string {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    },

    formatTimeFromString (time: string): string {
      const date = new Date(time);
      return this.formatTime(date);
    },
};

export default GeneralUtil;
